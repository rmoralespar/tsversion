   
   {
        function prueba() {
            let name = prompt("Cual es tu nombre?");
            let doyou = prompt("Confirmas que quieres recibir informacion y noticias de Taylor Swift?")
            if (doyou === "si") {
                let h2 = document.querySelector("h2");
                h2.innerHTML = " 💪🏼 " + " " + name + " " + "disfrutemos de su musica juntos";
            }
            if (doyou !== "si") {
                let h2 = document.querySelector("h2");
                h2.innerHTML = " 😢 " + " " + "Gracias de todos modos por visitar nuestra web" + " " + name + " " + "disfruta con las otras paginas";
            }
        }
        let tryButton = document.querySelector(".tryButton");
        tryButton.addEventListener("click", prueba)
    }
    