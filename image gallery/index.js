//Select all filterbutton in nav and filterablecards in images class

const filterButtons = document.querySelectorAll(".nav button");
const filterablecards = document.querySelectorAll(".filterable_cards .images");


//filtercards function definition
const filtercards = (e) => {
    const filter = e.target.dataset.name;
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    //itetrate for each images option
    filterablecards.forEach(images => {
        // If the filter is "all", show all images
        if (filter === "all") {
            images.classList.remove("hide");
        }
        else {
            // Otherwise, show only the images matching the selected category
            if (images.dataset.name === filter) {
                images.classList.remove("hide");
            } else {
                images.classList.add("hide");
            }
        }
    });



};

//add click event to each button in nav
filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        filtercards(e);  // Pass the event to the filtercards function
    });
});

