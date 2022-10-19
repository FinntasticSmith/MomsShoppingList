const form = document["list-form"]


form.addEventListener("submit", function(event){
    event.preventDefault()


const title = form.title.value
form.title.value = ""

const listItem = document.createElement("li")
listItem.textContent = title + ""
document.getElementsByTagName("ul")[0].append(listItem)

const remove = document.createElement("button")
remove.textContent = "x"
remove.classList.add("remove")
listItem.append(remove)
remove.addEventListener("click",removeItem)

const space = document.createElement("br")
space.textContent = title
listItem.append(space)

function removeItem(event) {
    if(event.target.classList.contains("remove")) {
        event.target.closest("li").remove()
    }
}

const edit = document.createElement("button");
edit.textContent = "edit"
listItem.append(edit)
edit.addEventListener("edit", function(event){

}
)

const box = document.createElement("x")
box.addEventListener("click", function(event){
    event.box.remove();
})
})


// //add li's in ul for each submit that has edit and delete buttons.

// //create the li's
// //create edit with its own input
// //create a delete to "cross off the list"

    
// const firstName = form.firstName.value
// const lastName = form.lastName.value
// form.firstName.value = ""
// form.lastName.value = ""

// // 1 . <h1></h1>
// const h1 = document.createElement('h1')
// // 2. <h1>Harry Potter</h1>
// h1.textContent = firstName + " " + lastName
// // 3. Append
// document.getElementsByTagName("ul")[0].append(li)
// })