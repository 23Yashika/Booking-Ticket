window.onload = () => {
let id1 = {
            id:1,title: "Avatar: Fire and Ash", date: "2025-05-16", time: "1:00 PM", price: 200,
        }
        let id2 = {
          id:2,title: "Retro", date: "2025-05-17", time: "4:30 PM", price: 180, 
        }
        let id3 = {
            id: 3, title: "Thunderbolts", date: "2025-05-18", time: "6:00 PM", price: 190 ,
        }
        let id4 = {
             id: 4, title: "Kuberaa", date: "2025-05-19", time: "7:00 PM", price: 170,
        }
        let id5 = {
           id: 5, title: "Housefull-5", date: "2025-05-20", time: "5:30 PM", price: 220,
        }
        let id6 = {
            id: 6, title: "Raid-2", date: "2025-05-21", time: "3:30 PM", price: 210,
        }
        let id7 = {
           id: 7, title: "Phule", date: "2025-05-22", time: "6:45 PM", price: 190,
        }
        let id8 = {
           id: 8, title: "The Bhootni", date: "2025-05-23", time: "8:00 PM", price: 230 
        }
        let id9 = {
            id: 9, title: "Piku", date: "2025-05-24", time: "5:00 PM", price: 200 
        }
        let id10 = {
           id: 10, title: "Kesari: Chapter2", date: "2025-05-25", time: "3:00 PM", price: 185,
        }

       localStorage.setItem("1",JSON.stringify(id1) );
         localStorage.setItem("2", JSON.stringify(id2));
         localStorage.setItem("3", JSON.stringify(id3));
         localStorage.setItem("4", JSON.stringify(id4));
         localStorage.setItem("5", JSON.stringify(id5));
         localStorage.setItem("6", JSON.stringify(id6));
         localStorage.setItem("7", JSON.stringify(id7));
         localStorage.setItem("8", JSON.stringify(id8));
         localStorage.setItem("9", JSON.stringify(id9));
         localStorage.setItem("10", JSON.stringify(id10));
    };
// function storeSelectedMovie(id) {
//     const selectedMovie = JSON.parse(localStorage.getItem(id));

//     if (selectedMovie) {
//         document.getElementById("stitle").textContent = selectedMovie.title;
//         document.getElementById("sdate").textContent = `Date: ${selectedMovie.date}`;
//         document.getElementById("stime").textContent = `Time: ${selectedMovie.time}`;
//         document.getElementById("sprice").textContent = `Price per ticket: ₹${selectedMovie.price}`;

//         document.getElementById("seat-count").addEventListener("input", () => {
//             const count = parseInt(document.getElementById("seat-count").value) || 1;
//             document.getElementById("total-price").textContent = `Total: ₹${selectedMovie.price * count}`;
//         });

//         // Set initial total price
//         const initialCount = parseInt(document.getElementById("seat-count").value) || 1;
//         document.getElementById("total-price").textContent = `Total: ₹${selectedMovie.price * initialCount}`;

//         // Store selected movie globally if needed in confirmBooking
//         window.selectedMovie = selectedMovie;
//     } else {
//         alert("No movie selected.");
//     }
// }


// function storeSelectedMovie(id) {
//     const selectedMovie = JSON.parse(localStorage.getItem(id));

//     if (selectedMovie) {
//         document.getElementById("stitle").textContent = selectedMovie.title;
//         document.getElementById("sdate").textContent = selectedMovie.date;
//         document.getElementById("stime").textContent = `Time: ${selectedMovie.time}`;
//         document.getElementById("sprice").textContent = `Price per ticket: ₹${selectedMovie.price}`;

//         document.getElementById("seat-count").addEventListener("input", () => {
//             const count = parseInt(document.getElementById("seat-count").value) || 1;
//             document.getElementById("total-price").textContent = `Total: ₹${selectedMovie.price * count}`;
//         });

//         // Optional: set initial total price
//         const initialCount = parseInt(document.getElementById("seat-count").value) || 1;
//         document.getElementById("total-price").textContent = `Total: ₹${selectedMovie.price * initialCount}`;

//     } else {
//         alert("No movie selected.");
//     }

//     // Store selectedMovie globally if you need it in other functions
//     window.selectedMovie = selectedMovie;
// }

// function goBack() {
//     window.location.href = "movie-list.html";
// }

// function confirmBooking() {
//     const count = parseInt(document.getElementById("seat-count").value) || 1;
//     if (window.selectedMovie) {
//         alert(`🎟 Booking confirmed for ${selectedMovie.title} on ${selectedMovie.date} at ${selectedMovie.time}\nSeats: ${count}\nTotal: ₹${selectedMovie.price * count}`);
//     } else {
//         alert("Please select a movie first.");
//     }
// }

// movie.js

// const movies = {
//     1: { id: 1, title: "Avatar: Fire and Ash", date: "2025-05-16", time: "1:00 PM", price: 200 },
//     2: { id: 2, title: "Retro", date: "2025-05-17", time: "4:30 PM", price: 180 },
//     3: { id: 3, title: "Thunderbolts", date: "2025-05-18", time: "6:00 PM", price: 190 },
//     4: { id: 4, title: "Kuberaa", date: "2025-05-19", time: "7:00 PM", price: 170 },
//     5: { id: 5, title: "Housefull-5", date: "2025-05-20", time: "5:30 PM", price: 220 },
//     6: { id: 6, title: "Raid-2", date: "2025-05-21", time: "3:30 PM", price: 210 },
//     7: { id: 7, title: "Phule", date: "2025-05-22", time: "6:45 PM", price: 190 },
//     8: { id: 8, title: "The Bhootni", date: "2025-05-23", time: "8:00 PM", price: 230 },
//     9: { id: 9, title: "Piku", date: "2025-05-24", time: "5:00 PM", price: 200 },
//     10: { id: 10, title: "Kesari: Chapter2", date: "2025-05-25", time: "3:00 PM", price: 185 }
// };


// window.onload = () => {
//     for (let key in movies) {
//         localStorage.setItem(key, JSON.stringify(movies[key]));
//     }
// };
