function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
        // Add a record here
            artist: "Dino Merlin",
            title: "Halima",
            release_year: 1988,
            format: {
                1: "CDC",
                2: "8T8",
                3: "LPL"
            }
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;