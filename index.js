

    document.getElementById('search').addEventListener("click",  search_vedio)


    const key = "AIzaSyDWs7nKbD9xoUxmrS71G4EKAJh-CxtiG08"
    let result_div = document.getElementById("search_results")
    
    async function search_vedio(){
        document.getElementById("search_results").innerHTML=""
        try{
        let vedio_query = document.getElementById("video").value
        let response = await fetch( `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${vedio_query}&type=video&key=${key}&maxResults=20`);
        let data = await response.json()
        console.log(data)
        let videos = data.items;
        modata(videos)
    }
    catch (error){
        console.log(error)
    }
}

function modata(elem){
    document.getElementById("search_results").innerHTML=""


    elem.forEach((el)=>{
     let {snippet,id:{videoId}} = el;
     console.log(snippet)

     let div = document.createElement("div")

     let title = document.createElement("p")
     title.innerText = snippet.title
     let thumbnail = document.createElement("img")
     thumbnail.src = snippet.thumbnails.medium.url

     let newdata = {
         snippet:snippet,
         videoId:videoId
     }
     div.onclick = function(){
         showvideo(newdata)
     }

     div.append(thumbnail,title)
     result_div.append(div)

    })
    

}

function showvideo(dat){
    localStorage.setItem("clicked_vedio",JSON.stringify(dat))
    window.location.href = "yotube2.html"

}
function home(){
    window.location.href = "index.html"
}





const api = "AIzaSyDWs7nKbD9xoUxmrS71G4EKAJh-CxtiG08"
    let result = document.getElementById("search_results")
    
    async function random(){
        try{
        let vedio_query = document.getElementById("video").value
        let response = await fetch( `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=trending&type=video&key=${api}&maxResults=20`);
        let data = await response.json()
        console.log(data)
        let videos = data.items;
        modata(videos)
    }
    catch (error){
        console.log(error)
    }
}
random();


function modata(elem){
    document.getElementById("search_results").innerHTML=""

    elem.forEach((el)=>{
     let {snippet,id:{videoId}} = el;
     console.log(snippet)

     let div = document.createElement("div")

     let title = document.createElement("p")
     title.innerText = snippet.title
     let thumbnail = document.createElement("img")
     thumbnail.src = snippet.thumbnails.medium.url

     let newdata = {
         snippet:snippet,
         videoId:videoId
     }
     div.onclick = function(){
         showvideo(newdata)
     }


    
     div.append(thumbnail,title)
     result.append(div)

    })
    

}
function showvideo(dat){
    localStorage.setItem("clicked_vedio",JSON.stringify(dat))
    window.location.href = "yotube2.html"

}