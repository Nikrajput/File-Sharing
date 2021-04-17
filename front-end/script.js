let dropZone=document.querySelector('.drop-zone')
let browseBtn=document.querySelector('.browse-btn')
let fileInput=document.querySelector('#fileinput')
let baseUrl='https://localhost:7896'
let uploadUrl=`${baseUrl}/api/files`

dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault()
    if(!dropZone.classList.contains('dragged')){
        dropZone.classList.add('dragged')
    }
})

dropZone.addEventListener('dragleave',()=>{
    dropZone.classList.remove('dragged')
})

dropZone.addEventListener('drop',(e)=>{
    e.preventDefault()
    dropZone.classList.remove('dragged')
    const files=e.dataTransfer.files
    if(files.length){
        fileInput.files=files
        uploadFile()
    }
})

browseBtn.addEventListener('click',()=>{
    fileInput.click()
})

fileInput.addEventListener('change',()=>{
    uploadFile()
})

const uploadFile=function(){

    const file=fileInput.files[0]
    const formdata=new FormData()
    formdata.append('myfile',file)

    const xhr=new XMLHttpRequest()
    xhr.onreadystatechange=function(){
        if(xhr.readyState==XMLHttpRequest.DONE){
            console.log(xhr.response)
        }
    }

    xhr.open('POST',uploadUrl)
    xhr.send(formdata)
}