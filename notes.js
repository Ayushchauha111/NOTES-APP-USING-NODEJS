const fs=require('fs')
const chalk=require('chalk')
const getNotes =()=>
{
    return "Your notes..."
}


const addnote = (title,body) =>
{
  const notes = loadnotes()                         //time to push are title and body

    const duplicatenotess = notes.find((note) => note.title === title)    
    // const duplicatenotes = notes.filter((note) => note.title === title)                             //upper is a better way to find duplicate using"find" methid because using filter we didint stop on frst duplicate we kept on iterationg through all aray so we using find method
    // const duplicatenotes = notes.filter(function(note) {
    //     return note.title === title                           //if there is an duplicatt title duplicate array is not empty
    // })
 if(!duplicatenotess)
{
    notes.push({
        title: title,
        body: body                                                          //    1. we load then change then save
    })

    savenotes(notes)
     console.log(chalk.green.inverse('new node added'))
}
else{
     console.log(chalk.red.inverse('node title already taken'))
}
}
  const savenotes = (notes) =>                             //it takes an array and convert it to json                    
  {
      const dataJSON=JSON.stringify(notes)                                  //stringfy to create it as json then write it
      fs.writeFileSync('notes.json',dataJSON)
  }
// const savenotes = function(notes)                             //it takes an array and convert it to json                    
// {
//     const dataJSON = JSON.stringify(notes)                                  //stringfy to create it as json then write it
//     fs.writeFileSync('notes.json', dataJSON)
// }

 const loadnotes =() =>                               //code really work well when there is json file when we use try and catch
 {
     try{                                                           // when we have a empty json we have to return []
          const dataBuffer=fs.readFileSync('notes.json')
          const jsondata=dataBuffer.toString()
          return JSON.parse(jsondata)
       }
     catch(e)
     {
         return []
     }
      


 }
// const loadnotes = function()                              //code really work well when there is json file when we use try and catch
// {
//     try {                                                           // when we have a empty json we have to return []
//         const dataBuffer = fs.readFileSync('notes.json')
//         const jsondata = dataBuffer.toString()
//         return JSON.parse(jsondata)
//     }
//     catch (e) {
//         return []
//     }



// }

const removenote = (title)=>     //1.load existing note then arryfilter then save newly creeated
{
 const notes=loadnotes()
    const notetokeep = notes.filter((note) => note.title !== title )  //return a new arrY In which the same title element is not included
    // const notetokeep = notes.filter(function(note)    //return a new arrY In which the same title element is not included
    // {
    //     return note.title !== title             // false only when title matched
    // })
 if(notes.length  !==  notetokeep.length)
 {
       savenotes(notetokeep)
      console.log(chalk.green.inverse("NOTE REMOVED"))
 }
 else{
     console.log(chalk.red.inverse("NO NOTE FOUND"))
 }
}
//     const removenote = function(title)     //1.load existing note then arryfilter then save newly creeated
//     {
//         const notes = loadnotes()
//         const notetokeep = notes.filter((note) =>   //return a new arrY In which the same title element is not included
//         {
//             return note.title !== title             // false only when title matched
//         })
//         if (notes.length !== notetokeep.length) {
//             savenotes(notetokeep)
//             console.log(chalk.green.inverse("NOTE REMOVED"))
//         }
//         else {
//             console.log(chalk.red.inverse("NO NOTE FOUND"))
//         }


// }
const listnotes=()=>
{
    const notes=loadnotes()
      console.log(chalk.blue.inverse("listing your notes wait"))
     notes.forEach((note) => {
         console.log(note.title)
     })
         

}
const readnotes = (title) => {
    const notes=loadnotes()
  const note=  notes.find((note)=> note.title===title)

  if(note)
  {
 console.log(chalk.inverse(note.title))
 console.log(note.body)
  }
  else{

    console.log(chalk.red.inverse('note not found'))
  }
    


}


module.exports=
{
    getNotes: getNotes,
    addnote: addnote,
    removenote: removenote,
    listnotes:listnotes,
    readnotes:readnotes
}