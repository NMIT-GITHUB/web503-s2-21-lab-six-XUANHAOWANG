var admin=require('firebase-admin') 
const serviceAccount=require('./web03-lab6-firebase-adminsdk-jak25-4043d39520.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore();

 db.collection('Users').get()
 .then(snapshot=>{
     snapshot.forEach(doc=>{
         console.log(doc.id,'=>',doc.data())
     })
     
     })
     .catch(err=>{
        console.log(err)
 })
