const express = require("express")
const cors=require('cors')

const server = express ()
server.listen(3001,function(){
    console.log("Hello Server");
})

var movieslist = [{
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/7jEnft2CLNbILWAiBRIBrXNN7Qh.jpg",
        "genre_ids": [10767, 35],
        "id": 498,
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "Late Show with David Letterman",
        "overview": "Late Show with David Letterman is an American late-night talk show hosted by David Letterman on CBS. The show debuted on August 30, 1993, and is produced by Letterman's production company, Worldwide Pants Incorporated and CBS Television Studios. The show's music director and band-leader of the house band, the CBS Orchestra, is Paul Shaffer. The head writer is Matt Roberts and the announcer is Alan Kalter. Of the major U.S. late-night programs, Late Show ranks second in cumulative average viewers over time and third in number of episodes over time. The show leads other late night shows in ad revenue with $271 million in 2009.\n\nIn most U.S. markets the show airs at 11:35 p.m. Eastern/Pacific time, but is recorded Monday through Wednesday at 4:30 p.m., and Thursdays at 3:30 p.m and 6:00 p.m. The second Thursday episode usually airs on Friday of that week.\n\nIn 2002, Late Show with David Letterman was ranked No. 7 on TV Guide's 50 Greatest TV Shows of All Time. CBS has a contract with Worldwide Pants to continue the show through 2014; by then, Letterman will surpass Johnny Carson as the longest tenured late-night talk show host.",
        "popularity": 5344.483,
        "poster_path": "/7dwM8AKyQfauguoQbI1MIlHinLM.jpg",
        "first_air_date": "1993-08-30",
        "name": "Late Show with David Letterman",
        "vote_average": 6.299,
        "vote_count": 137
      },
      {
        "adult": false,
        "backdrop_path": "/gMMnf8VRg3Z98WaFmOLr9Jk8pIs.jpg",
        "genre_ids": [35, 10767],
        "id": 63770,
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "The Late Show with Stephen Colbert",
        "overview": "Stephen Colbert brings his signature satire and comedy to The Late Show with Stephen Colbert, the #1 show in late night, where he talks with an eclectic mix of guests about what is new and relevant in the worlds of politics, entertainment, business, music, technology, and more. Featuring bandleader Jon Batiste with his band Stay Human, the Emmy Award-nominated show is broadcast from the historic Ed Sullivan Theater. Stephen Colbert, Chris Licht, Tom Purcell, and Jon Stewart are executive producers. Barry Julien and Denise Rehrig serve as co-executive producers.must watch",
        "popularity": 5050.135,
        "poster_path": "/9jkThAGYj2yp8jsS6Nriy5mzKFT.jpg",
        "first_air_date": "2015-09-08",
        "name": "The Late Show with Stephen Colbert",
        "vote_average": 6.567,
        "vote_count": 268
      },
      {
        "adult": false,
        "backdrop_path": "/dfX2UaHVE5c7kLBFbgmEZJuy4Ev.jpg",
        "genre_ids": [10767, 35],
        "id": 61818,
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "Late Night with Seth Meyers",
        "overview": "Seth Meyers, who is \"Saturday Night Live’s\" longest serving anchor on the show’s wildly popular \"Weekend Update,\" takes over as host of NBC’s \"Late Night\" — home to A-list celebrity guests, memorable comedy and the best in musical talent. As the Emmy Award-winning head writer for \"SNL,\" Meyers has established a reputation for sharp wit and perfectly timed comedy, and has gained fame for his spot-on jokes and satire. Meyers takes his departure from \"SNL\" to his new post at \"Late Night,\" as Jimmy Fallon moves to \"The Tonight Show\".",
        "popularity": 5050.088,
        "poster_path": "/g6MrJxNaHYGYU7Sxo72e5B8gKOV.jpg",
        "first_air_date": "2014-02-25",
        "name": "Late Night with Seth Meyers",
        "vote_average": 5.472,
        "vote_count": 89
      },
      {
        "adult": false,
        "backdrop_path": "/9daf0KXr3xUkMt2NCI0ZhDIZJEa.jpg",
        "genre_ids": [10766],
        "id": 12415,
        "origin_country": [
          "ZA"
        ],
        "original_language": "af",
        "original_name": "Egoli: Place of Gold",
        "overview": "A South African television soap opera created by Franz Marx which revolves around the daily ups, downs, trials and tribulations of a handful of families in and around Johannesburg (which is often referred to as eGoli - the City of Gold)",
        "popularity": 4976.02,
        "poster_path": "/5X0SWyNJ5IjN9YSXlbHBOVMzh1G.jpg",
        "first_air_date": "1992-04-06",
        "name": "Egoli: Place of Gold",
        "vote_average": 6.75,
        "vote_count": 4
      },
      {
        "adult": false,
        "backdrop_path": "/h0y3OzHzG4yNvn8u3Za6ByH8lrQ.jpg",
        "genre_ids": [18, 10766],
        "id": 45789,
        "origin_country": [
          "DE"
        ],
        "original_language": "de",
        "original_name": "Sturm der Liebe",
        "overview": "These are the stories of relationships taking place in the fictional five-star hotel Fürstenhof, located in Feldkirchen-Westerham near Rosenheim with the plot revolving around members of the family room area, the hotel owners, and employees.",
        "popularity": 4960.471,
        "poster_path": "/jfFNydakwvbeACEwSd2Gh8UWtba.jpg",
        "first_air_date": "2005-09-26",
        "name": "Sturm der Liebe",
        "vote_average": 6,
        "vote_count": 29
      },
      {
        "adult": false,
        "backdrop_path": "/Ajku4m7jbMpCTEPr794Imv19mCA.jpg",
        "genre_ids": [10763, 35],
        "id": 4385,
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "The Colbert Report",
        "overview": "The Colbert Report is an American satirical late night television program that airs Monday through Thursday on Comedy Central. It stars political humorist Stephen Colbert, a former correspondent for The Daily Show with Jon Stewart. The Colbert Report is a spin-off from and counterpart to The Daily Show that comments on politics and the media in a similar way. It satirizes conservative personality-driven political pundit programs, particularly Fox News' The O'Reilly Factor. The show focuses on a fictional anchorman character named Stephen Colbert, played by his real-life namesake. The character, described by Colbert as a \"well-intentioned, poorly informed, high-status idiot\", is a caricature of televised political pundits.\n\nThe Colbert Report has been nominated for seven Primetime Emmy Awards each in 2006, 2007, 2008, 2009, 2010, 2011, and 2012, two Television Critics Association Awards Awards, and two Satellite Awards. In 2013, it won two Emmys. It has been presented as non-satirical journalism in several instances, including by the Tom DeLay Legal Defense Trust and by Robert Wexler following his interview on the program. The Report received considerable media coverage following its debut on October 17, 2005, for Colbert's coining of the term \"truthiness\", which dictionary publisher Merriam-Webster named its 2006 Word of the Year.",
        "popularity": 4898.662,
        "poster_path": "/pn2CVXjOlR8kY5MgOTJjZ71IM0Q.jpg",
        "first_air_date": "2005-10-17",
        "name": "The Colbert Report",
        "vote_average": 6.833,
        "vote_count": 257
      },
      {
        "adult": false,
        "backdrop_path": "/dasgPx3OgkxHSQyncKlApfZkpi2.jpg",
        "genre_ids": [10767, 10763],
        "id": 224,
        "origin_country": [
          "GB"
        ],
        "original_language": "en",
        "original_name": "Match of the Day",
        "overview": "BBC's football highlights and analysis.\n\n\"The longest-running football television programme in the world\" as recognised by Guinness World Records in 2015.",
        "popularity": 4889.123,
        "poster_path": "/aA25JrHXj8ZPTJYj2iSIueyb34C.jpg",
        "first_air_date": "1964-08-22",
        "name": "Match of the Day",
        "vote_average": 7.375,
        "vote_count": 40
      },
      {
        "adult": false,
        "backdrop_path": "/mzgxjQFLYPk73bCYeGFWOAmKqV0.jpg",
        "genre_ids": [10766],
        "id": 11890,
        "origin_country": [
          "NL"
        ],
        "original_language": "nl",
        "original_name": "Goede Tijden, Slechte Tijden",
        "overview": "Goede tijden, slechte tijden, also known as GTST, is the longest-running Dutch soap opera,  revolving around the lives of the families Alberts, Sanders, De Jong, Van Houten and Bouwhuis. It all takes place in the fictional town of Meerdijk.",
        "popularity": 4731.095,
        "poster_path": "/eQj2e8Nok6LCDO1dJXqNUkVcNby.jpg",
        "first_air_date": "1990-10-01",
        "name": "Goede Tijden, Slechte Tijden",
        "vote_average": 5.088,
        "vote_count": 17
      },
      {
        "adult": false,
        "backdrop_path": "/amtOltTVcK9vQtL1iQS6p3LBi05.jpg",
        "genre_ids": [10767],
        "id": 62223,
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "The Late Late Show with James Corden",
        "overview": "Once Craig Ferguson retires, James Corden will be taking over The Late Late Show. The show is a late night talk show that interviews celebrities and has its own bits. And of course, it's all hosted by James Corden.",
        "popularity": 4669.022,
        "poster_path": "/qPmVoG8G9tc1nN8ZwGV2zYcknit.jpg",
        "first_air_date": "2015-03-23",
        "name": "The Late Late Show with James Corden",
        "vote_average": 5.449,
        "vote_count": 128
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [18, 10751],
        "id": 50821,
        "origin_country": [
          "HU"
        ],
        "original_language": "hu",
        "original_name": "Barátok közt",
        "overview": "",
        "popularity": 4386.174,
        "poster_path": "/mT6VFzwGPddwGjWGxzNOy4JVL8.jpg",
        "first_air_date": "1998-10-26",
        "name": "Barátok közt",
        "vote_average": 4.3,
        "vote_count": 9
      },
      {
        "adult": false,
        "backdrop_path": "/lksigd4PnpvvIY9oPHW2DEnHh5H.jpg",
        "genre_ids": [],
        "id": 70558,
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "NPR Tiny Desk Concerts",
        "overview": "Intimate musical performances, recorded live at the desk of All Songs Considered host Bob Boilen.",
        "popularity": 4188.796,
        "poster_path": "/sJ6HdzajIVkC5G2kRROhNu8at43.jpg",
        "first_air_date": "2008-04-22",
        "name": "NPR Tiny Desk Concerts",
        "vote_average": 7.2,
        "vote_count": 5
      },
      {
        "adult": false,
        "backdrop_path": "/2o0cVL6fOa06aXd5xogZhD1h4ce.jpg",
        "genre_ids": [10766, 18],
        "id": 14686,
        "origin_country": [
          "DE"
        ],
        "original_language": "de",
        "original_name": "Alles was zählt",
        "overview": "Alles was zählt is a German television soap opera first broadcast on RTL on September 4, 2006. The original plot revolved around Diana Sommer's dream to become a world class ice skater. She fell in love with Julian Herzog, who signed her at the prestigious Steinkamp Sport and Wellness Center, run by the unscrupulous Steinkamp dynasty. Diana and Julian eventually became a couple, but in November 2007, Julian suffered a brain hemorrhage and died during their wedding. Diana remained in Essen until January 2009, when she left to join a skating centre in Halle. The story continues to revolve around the Steinkamp Sport and Wellness Centre and its quest to become a sporting powerhouse, as well as the lives of the characters who work at and around the Centre.",
        "popularity": 3925.454,
        "poster_path": "/zExwkyO7exxrMVrpOkDvK0BTelW.jpg",
        "first_air_date": "2006-09-04",
        "name": "Alles was zählt",
        "vote_average": 4.5,
        "vote_count": 6
      },
      {
        "adult": false,
        "backdrop_path": "/acJDjIEdm66k2oKsr0xbOPvn0wH.jpg",
        "genre_ids": [10767],
        "id": 2225,
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "Who Wants to Be a Millionaire?",
        "overview": "American version of the tense gameshow where contestants tackle a series of multiple-choice questions to win large cash prizes.",
        "popularity": 3703.122,
        "poster_path": "/oZ7fBwLRgKYyJcliFOfp03xv6Mk.jpg",
        "first_air_date": "1999-08-16",
        "name": "Who Wants to Be a Millionaire?",
        "vote_average": 6.2,
        "vote_count": 32
      },
      {
        "adult": false,
        "backdrop_path": "/hH4YaZuH89Hlyz0DEkf362Mj8gU.jpg",
        "genre_ids": [35],
        "id": 65701,
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "Good Mythical Morning",
        "overview": "Two \"Internetainers\" (Rhett & Link) go far out and do the weirdest things, giving you a daily dose of casual comedy every Monday-Friday.",
        "popularity": 3615.333,
        "poster_path": "/2Fja87aTeuXxTEI1MH2IuHHSsLq.jpg",
        "first_air_date": "2012-01-09",
        "name": "Good Mythical Morning",
        "vote_average": 6.742,
        "vote_count": 64
      },
      {
        "adult": false,
        "backdrop_path": "/q8fmM50In8xGVW0iYoENPa71kAA.jpg",
        "genre_ids": [10764],
        "id": 1636,
        "origin_country": [
          "GB"
        ],
        "original_language": "en",
        "original_name": "Top of the Pops",
        "overview": "The biggest stars, the most iconic performances, the most outrageous outfits – it’s Britain’s number one pop show.",
        "popularity": 3535.883,
        "poster_path": "/jjfTTjVYWyD6rGHVbnC44IrsJ7P.jpg",
        "first_air_date": "1964-01-01",
        "name": "Top of the Pops",
        "vote_average": 6.622,
        "vote_count": 37
      },
      {
        "adult": false,
        "backdrop_path": "/rj3jBAZwPiOgkwAy1205MAgLahj.jpg",
        "genre_ids": [10766],
        "id": 81329,
        "origin_country": [
          "FR"
        ],
        "original_language": "fr",
        "original_name": "Un si grand soleil",
        "overview": "Claire is surprised when she gets arrested for the murder of her childhood friend after she returns to Montpellier.",
        "popularity": 3495.318,
        "poster_path": "/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
        "first_air_date": "2018-08-27",
        "name": "Chronicles of the Sun",
        "vote_average": 7.218,
        "vote_count": 85
      },
      {
        "adult": false,
        "backdrop_path": "/aYXF10EsIlgY7d24BWX0I7x2zfp.jpg",
        "genre_ids": [10763, 35],
        "id": 2224,
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "The Daily Show",
        "overview": "The World's Fakest News Team tackle the biggest stories in news, politics and pop culture.",
        "popularity": 3475.946,
        "poster_path": "/ixcfyK7it6FjRM36Te4OdblAq4X.jpg",
        "first_air_date": "1996-07-22",
        "name": "The Daily Show",
        "vote_average": 6.347,
        "vote_count": 521
      },
      {
        "adult": false,
        "backdrop_path": "/qFfWFwfaEHzDLWLuttWiYq7Poy2.jpg",
        "genre_ids": [10767],
        "id": 2261,
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "The Tonight Show Starring Johnny Carson",
        "overview": "The Tonight Show Starring Johnny Carson is a talk show hosted by Johnny Carson under The Tonight Show franchise from 1962 to 1992. It originally aired during late-night. For its first ten years, Carson's Tonight Show was based in New York City with occasional trips to Burbank, California; in May 1972, the show moved permanently to Burbank, California. In 2002, The Tonight Show Starring Johnny Carson was ranked #12 on TV Guide's 50 Greatest TV Shows of All Time.",
        "popularity": 3386.888,
        "poster_path": "/oA8QVTGlAN511uCAMDN60aVQUs1.jpg",
        "first_air_date": "1962-10-01",
        "name": "The Tonight Show Starring Johnny Carson",
        "vote_average": 7.36,
        "vote_count": 68
      },
      {
        "adult": false,
        "backdrop_path": "/pScata79RTzkw5csapgmtN7pqEM.jpg",
        "genre_ids": [10764],
        "id": 256059,
        "origin_country": [
          "GB"
        ],
        "original_language": "en",
        "original_name": "Ready Steady Cook",
        "overview": "Talented chefs battle it out against the clock, creating delicious dishes in 20 minutes",
        "popularity": 3340.008,
        "poster_path": "/3NotbtMdZouIVywd5VcGezBEcNC.jpg",
        "first_air_date": "1994-10-24",
        "name": "Ready Steady Cook",
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [10767],
        "id": 103108,
        "origin_country": [
          "DE"
        ],
        "original_language": "de",
        "original_name": "MDR um 4",
        "overview": "",
        "popularity": 3224.045,
        "poster_path": "/xoTOnCc50QJBwRZKlIaM92Q8vbh.jpg",
        "first_air_date": "2014-01-06",
        "name": "MDR um 4",
        "vote_average": 6.5,
        "vote_count": 2
      }
    ],
    "total_pages": 9070,
    "total_results": 181388
  }];
server.use(cors())

server.get("/movies",function(req,res){
    res.send(movieslist[0].results); 
})


server.get("/getMovieById/:id", function (req, res) {
    var id = +req.params.id;
    var movie = movieslist[0].results.find((movie) => movie.id === id);
    if (movie) {
        res.json(movie); 
    } else {
        res.status(404).send("Can't find movie with this ID!"); 
    }
});

  

