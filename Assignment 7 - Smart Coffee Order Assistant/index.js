function startAssistant() {
    // Part 1: Login & Access Control
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
  
    let role = "";
    let securityLevel = "";
  
    if ((username === "admin" || username === "user") && password === "1234") {
      role = username;
      securityLevel = (role === "admin") ? "high" : "low";
      alert("✅ Login successful! Welcome, " + role + ".");
    } else {
      alert("❌ Invalid credentials. Access denied.");
      return;
    }
  
    // Part 2: Coffee Order
    const name = prompt("What is your name?");
    const age = parseInt(prompt("What is your age?"));
    const coffee = prompt("Choose your coffee (espresso, latte, cappuccino):").toLowerCase();
    const quantity = parseInt(prompt("How many cups?"));
  
    let price = 0;
    switch (coffee) {
      case "espresso":
        price = 2.5;
        break;
      case "latte":
        price = 3.5;
        break;
      case "cappuccino":
        price = 4.0;
        break;
      default:
        alert("Invalid coffee type. Please refresh and try again.");
        return;
    }
  
    const originalTotal = price * quantity;
    const discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
    const finalTotal = originalTotal - discount;
  
    // Part 3: Bill Splitter with Tip
    const split = parseInt(prompt("How many people will split the bill? (1, 2, or 3)"));
    const tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, 15):"));
    const tipAmount = (finalTotal * tipPercent) / 100;
    const totalWithTip = finalTotal + tipAmount;
    const perPerson = totalWithTip / split;
  
    // Final Result
    alert(
      `👋 Hello ${name}!\n` +
      `You ordered ${quantity} ${coffee}(s).\n` +
      `Original total: $${originalTotal.toFixed(2)}\n` +
      `Discount: $${discount.toFixed(2)}\n` +
      `Tip: $${tipAmount.toFixed(2)}\n` +
      `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
      `Split between ${split} person(s): $${perPerson.toFixed(2)} each.`
    );
  }
  