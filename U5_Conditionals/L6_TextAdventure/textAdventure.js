let burgersOrPizza = prompt("You are ordering on the app of your favorite restaurant, \"Nathan's Burgers and Pizza.\" The homescreen offers two unsurprising options, burgers (1) and pizza (2). What do you order? (Type 1 or 2)")

if(burgersOrPizza == 1) {
    alert("You click on the icon for a burger. Once you click on it, though, you see bold lettering that says, \"SOLD OUT.\" Because of how poorly designed the app is, you now have to refresh it to order something else.")
} else if (burgersOrPizza == 2){
    let chooseTopping= prompt("The app displays, \"Great! What toppings do you want on your pizza?\" You can choose between Cheese (1), Pepperoni (2), Supreme (3), or Pineapple (4)")
    if(chooseTopping == 4){
        alert("The app flashes to life. \"You have been found guilty of the ultimate crime. Police will be dispatched for your arrest as soon as possible.\" You hear a cacophany of sirens come nearer and nearer...")    
    } else if(chooseTopping == 1 ||chooseTopping == 2 ||chooseTopping == 3){
        let chooseCrust = prompt("\"And what type of crust?\" You can choose between Traditional (1) and Thin-Crust (2)")
        if(chooseCrust == 1 || chooseCrust == 2){
            if(chooseCrust == 1 && chooseTopping == 1){
                alert("You receive a cofirmation pop-up. \"Just to confirm: you wanted a traditional cheese pizza, right? Press OK to confirm.\"")
            } else if(chooseCrust == 1 && chooseTopping == 2){
                alert("You receive a cofirmation pop-up. \"Just to confirm: you wanted a traditional pepperoni pizza, right? Press OK to confirm.\"")
            } else if(chooseCrust == 1 && chooseTopping == 3){
                alert("You receive a cofirmation pop-up. \"Just to confirm: you wanted a traditional supreme pizza, right? Press OK to confirm.\"")
            } else if(chooseCrust == 2 && chooseTopping == 1){
                alert("You receive a cofirmation pop-up. \"Just to confirm: you wanted a thin-crust cheese pizza, right? Press OK to confirm.\"")
            } else if(chooseCrust == 2 && chooseTopping == 2){
                alert("You receive a cofirmation pop-up. \"Just to confirm: you wanted a thin-crust pepperoni pizza, right? Press OK to confirm.\"")
            } else if(chooseCrust == 2 && chooseTopping == 3){
                alert("You receive a cofirmation pop-up. \"Just to confirm: you wanted a thin-crust supreme pizza, right? Press OK to confirm.\"")
            }
            let stars = prompt("You submit your order, and a bright red banner appears that says, \"Thank you for using our app! If you liked our app, please enter '5' to rate us 5 stars!\"")
            if(stars >= 5){
                alert("Thank you for the glowing review!")
            } else{
                    alert("Jerk.")
            }
        }
        }
    }