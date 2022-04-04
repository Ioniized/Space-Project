var desc = ["Mercury is the first planet from the sun. It is the smallest planet, and the 2nd hottest. It takes about 88 days to orbit the sun.", 
            "Venus is the 2nd planet from the sun. It is the 3rd smallest planet, and the hottest planet. It takes around 270 days to orbit the sun", 
            "Earth is the 3rd planet from the sun, and is the only known planet that has life. It takes 365 and 1/4 days to orbit the sun", 
            "Mars is the 4th planet from the sun, and the coldest terrestrial planet. It takes almost 2 earth years to orbit the sun/", 
            "The asteroid belt is a belt of asteroids in-between Mars and Jupiter, and has the dwarf planet named Ceres.", 
            "Jupiter is the 5th planet from the sun, and the biggest planet and gas giant. Jupiter has over 60 moons! It takes almost 12 earth years to orbit the sun and has the fastest rotation in the system.", 
            "Saturn is the 6th planet from the sun, and the second biggest gas giant. It has huge rings! It takes 29.5 earth years to orbit the sun.", 
            "Uranus is the 7th planet from the sun. It has about 27 moons and is the coldest planet. Did you know it's turned sideways? It takes about 84 earth years to orbit the sun.", 
            "Neptune is the last planet from the sun. It has really stormy weather and is really cold! It takes almost 165 earth years to orbit the sun!",
            "Ceres is the 1st dwarf planet from the sun. It is located in the asteroid belt and is the biggest asteroid in there, making it a dwarf planet.",
            "Pluto is the 2nd dwarf planet from the sun. It is after Neptune and used to be a planet before planets had definitions.",
            "Haumea is the 3rd dwarf planet from the sun. It takes about 282 years to orbit the sun.",
            "Makemake is the 4th dwarf planet from the sun. It has a reddish brown color and takes about 305 years to orbit the sun",
            "Eris is the 5th dwarf planet from the sun. It has this white color and takes about 500 years or more to orbit the sun."
            ]
            var i = 0;
            function next(){
                if(i > desc[i].length){
                    i = 0;
                }
                document.getElementById("description").innerHTML = desc[i]
                i++;
            }