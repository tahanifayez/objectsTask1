/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
person = {
  name: "tahani",
  age: 18,
  city: "KUWAIT",
};

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/

(person.email = "outlook.com"),
  /******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
  { name: "John", age: 25 };
function hasKey(obj, key) {
  if (obj[key]) return true;
  else return false;
}

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
function logger() {
  movies.forEach((x) => console.log(x.title));
}

/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
//   function movies(x){
//     if(movies.year==1994)
//     console.log(`the movie was released in 1994`)
// else
// {console.log(`the movie was not released in 1994`)
// return x;}
//   }

function count(arr) {
  let counter = 0;
  arr.forEach((movie) => {
    if (movie.year == 1994) {
      counter++;
    }
  });
  console.log(counter);
}
count(movies);

/******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
//   if(x>=movies.title=="The Dark Knight")
//   movies.genre="Action/Drama"
// else return movies.genre

function update(movies) {
  movies.forEach((movie) => {
    if (movie.title == "The Dark Knight") movie.genre = "Action/Drama";
  });

  return movies;
}
console.log(update(movies));
// (x) => arr;
// arr.map(x);
// if (x == "The Dark Knight") console.log("Action/Drama");
// else return x;
