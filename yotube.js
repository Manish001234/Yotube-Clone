let {videoId,snippet:{title}} = JSON.parse(localStorage.getItem("clicked_vedio"))
console.log(videoId)
let vedio_div = document.getElementById("vedio_details")

let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${videoId}`
iframe.height = "100%"
iframe.width = "100%"
iframe.setAttribute("allowfullscreen","true")

vedio_div.append(iframe,title)


function home(){
 window.location.href = "index.html"
}

const api = "AIzaSyDWs7nKbD9xoUxmrS71G4EKAJh-CxtiG08"
 let result = document.getElementById("recomendation")
 
 async function reco(){
     try{
     let vedio_query = document.getElementById("video").value
     let response = await fetch( `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${videoId}&type=video&key=${api}&maxResults=20`);
     let data = await response.json()
     console.log(data)
     let videos = data.items;
     modata(videos)
 }
 catch (error){
     console.log(error)
 }
}
reco();


function modata(elem){

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
