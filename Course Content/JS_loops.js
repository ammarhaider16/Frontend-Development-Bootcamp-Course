const blogPosts = [
    {
        title:'titleA',
        author:'authorA',
        pubDate:'dateA'
    },

    {
        title:'titleB',
        author:'authorB',
        pubDate:'dateB'
    },

    {
        title:'titleC',
        author:'authorC',
        pubDate:'dateC'
    }
];  

// looping is efficient to print each array value
// loop syntax =>  for (let <variable>; loop stop condition; variable modification) {};
// important to use the let keyword


for (let i = 0; i < blogPosts.length; i++) {
console.log(blogPosts[i].title);
console.log(blogPosts[i].author);
console.log(blogPosts[i].pubDate);
};


const arr = [20,'str1','str2',10,40,60];

for (let i = 0; i < arr.length ; i++) {
  if (typeof arr[i] === 'number') {
    console.log(arr[i]);
  }     
}

