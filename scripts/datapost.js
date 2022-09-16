document.querySelector('form').addEventListener('submit',summitform)


function summitform(e){
    e.preventDefault()
    const payload={
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,

        place:document.getElementById('place').value,

        batch:document.getElementById('batch').value

    }
    // console.log(payload)


let data = JSON.stringify(payload)
        postregisterdata(data)
 
        async function postregisterdata(){      
 
    const res=await fetch("https://your-api-project-shivani.herokuapp.com/posts",{
     
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:data,
   
    })  .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    }
    // window.location.href='crud.html'
}