//const fs =require('fs')
//fs.writeFileSync('notes.txt','this is overwritten text')   //1.new file 2.what to write
//time for append a text


//const fs=require('fs')
//fs.appendFileSync('notes.txt',"'\'+appended line")     //for appending beacuse if we run again write file sync it just overwrite things
//require('./utils.js')
//const name ='ayush'
//console.log(name)

//const val=require('./utils.js')   //require for module in cs6 import   // to get data of other file
//console.log(val);

// const addfun=require('./utils.js')
// const sum=addfun(2,3)  //fun writtten in utils and have to use module.export(something eg.fun vaariable)
// console.log(sum);

// const getnotes=require('./notes.js')
// const validator=require('validator')     //npm deoenden to vaildatae email url 
// const msg=getnotes()
// console.log(msg);
// console.log(validator.isEmail('ayushchauh111@gmail.com'));
// console.log(validator.isEmail('1.com'))
// console.log(validator.isURL('http://google.com'))
// console.log(validator.isURL('http:/google.com'))


// const chalk=require('chalk')          //npm depen to color
// console.log(chalk.green.inverse.bold('SUCCESS!'))
// console.log(chalk.red.inverse.bold('FAILURE!'))

// nodemon app.js                 //restart everytinh command line pr baar  baar jhanjhat khatm

// const chalk=require('chalk')
// console.log(chalk.green.inverse("hey !"))
// console.log(process.argv[2])

// const commmand=process.argv[2]               //inbullt process.arg tatti islut yargs used

// if(commmand  == 'add')
// {
//     console.log("NOTE IS ADDDED")
// }
// else if(commmand == "remove")
// {
//     console.log("NOTE IS REMOVED")
// }

// //customize yarg version
// yargs.version=('1.1.0')

 
// create add command

// yargs.command(
// {
//     command:'add',
//     describe:'Add a new note',
//     handler: function()
//     {
//         console.log('Adding a new note!')
//     }
// }
// )


// //create remove command
//  yargs.command(
//      {
//           command: 'remove',
//           describe: 'Remove a note',
//           handler:function()
//           {
//               console.log(" Removing the note!")
//           }



//      }
//  )
//  yargs.command(
//      {
//           command: 'list',
//           describe: 'list a note',
//           handler:function()
//           {
//               console.log(" Listing the note!")
//           }



//      }
//             )

// console.log(yargs.argv)


// // add, remove, read ,list

// console.log(yargs.argv)
const yargs = require("yargs");
const chalk = require('chalk');
const note = require("./notes.js");
//create add command
 yargs.command(
     {
          command: 'add',
          describe: 'add a note',
          builder:                                     // best to get input input le skye using 3rd para in command line
          {
            title:{
                            describe:"TITLE OF NOTE",
                            demandOption:true,
                            type:'string'
            },
            body:
            {
                               describe:"BODY OF NOTE",
                                demandOption: true,
                                type: 'string'
            }


          },
          handler(argv)
          {
              note.addnote(argv.title,argv.body);

          }



     }

     
 )

 yargs.command(
 {
        command:'remove',
        describe:'remove a node',
        builder:
        {
          title:
          {
            describe:'note title to remove',
            demandOption:true,
            type:'string'
          }
        },
        handler(argv)
        {
          note.removenote(argv.title)
        }



 })
yargs.command({

  command: 'list',
  describe: 'list all the notes',
  handler() {
    note.listnotes()
  }

})
//read command
yargs.command(
  {
    command: 'read',
    describe: 'read a node',
    builder:
    {
      title:
      {
        describe: 'note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      note.readnotes(argv.title)
    }

  })

 yargs.parse()        //no need to use console.log(yargs.argv)
//create list command











