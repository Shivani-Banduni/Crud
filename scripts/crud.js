// console.log('hw')
const getdata=async()=>{
    let res=await fetch(`https://your-api-project-shivani.herokuapp.com/posts?_page=1&_limit=3`)
    let data=await res.json()
    console.log(data)
    appenddata(data)
}
getdata()



//appending data function
const appenddata=(data)=>{
    let divv=document.getElementById('main')

data.map((e)=>{

let image=document.createElement('img')
image.src='https://reqres.in/img/faces/7-image.jpg'

    let n=document.createElement('b')
    n.innerText=e.name

    let a=document.createElement('b')
    a.innerText=e.age

let place=document.createElement('b')
place.innerText=e.place

let b=document.createElement('b')
b.innerText=e.batch


let del=document.createElement('button')
del.innerText='DELETE'
del.style='height:30px;width:70px'

divv.append(image,n,a,place,b,del)
})
    
}

let pagebutton=document.getElementById('pag')
pagebutton.addEventListener('click',pagination)

function pagination(){
    
}
for(var i=1;i<=5;i++){
    let btn=document.createElement("button")
    btn.innerText=i
    pagebutton.append(btn)
}
