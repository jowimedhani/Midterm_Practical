var wrapperEle = document.body.querySelector(".wrapper");

var list = [
    {
        name: "Harry",
        age: 25,
    },
    {
        name: "Larry",
        age: 15,
    },
    {
        name: "Bert",
        age: 45,
    },
    {
        name: "Jerry",
        age: 35,
    },
    {
        name: "Berry",
        age: 5,
    },
    {
        name: "Bart",
        age: 55,
    }
];
for (var i = 0; i < list.length; i++) {
    var ele = document.createElement("div");
    var nameEle = document.createElement("h1");
    var ageEle = document.createElement("h2");

    if (list[i].age > 1) {
        nameEle.innerHTML = "Name: " + list[i].name;
        ageEle.innerHTML = "Age: " + list[i].age;
        if (list[i].age > 25) {
            ageEle.style.color = "green";
        }
    }


    ele.appendChild(nameEle);
    ele.appendChild(ageEle);
    wrapperEle.appendChild(ele);

}
{
    var poke = document.getElementById('poke');
    var counter = document.getElementById('counter')
    poke.addEventListener('click', myfunction)
    function myfunction() {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }

}



