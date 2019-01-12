
import * as firebase from 'firebase'; 

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
  
const database = firebase.database(); 


database.ref('exprenses').push({
  description : 'Rent', 
  note : '', 
  amount : '109500', 
  createdAt : '47474744'
})

database.ref('exprenses').push({
  description : 'Phone bill', 
  note : '', 
  amount : '5900', 
  createdAt : '6356356363'
})

database.ref('exprenses').push({
  description : 'Food', 
  note : '', 
  amount : '1200', 
  createdAt : 'fnfgnfg'
})




/* database.ref('notes').push({
  title : 'To do', 
  body : 'Go for work'
}); 

database.ref('notes/-LW1UYuAIt2D5FgHllZQ').update({
  body : 'Buy food 343r23'
}) */

/* const firebasesNotes = {
  notes : {
    svsvf: {
      title : 'First note', 
    body : 'This is my note'
    }, 
    fbfdvds : {

    }
  }, 

}

const notes = [{
  id : '12', 
  title : 'First notees', 
  body : 'This is my note '
}, 
{
  id : '13', 
  title : 'Second notees', 
  body : 'This is my note '
}
]

database.ref().set(notes);  */

/* 
const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val()); 
}, (e) =>{
  console.log('Error with data fetching', e); 
})

setTimeout(() => {
  database.ref('age').set(28); 
}, 3500); 

setTimeout(() => {
  database.ref('age').set(32); 
}, 7000); 

setTimeout(() => {
  database.ref().off(); 
}, 10500);  */

// fetch data 


/* database.ref('location')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val(); 
    console.log(val); 
  })
  .catch((e)=> {
    console.log('Error fetching data', e ); 
  }) */

// 


// adding data to database 

/* 
  database.ref().set({
    name : 'Alexander', 
    age : 36, 
    isSingle : true, 
    stressLevel : 6, 
    job : {
      title : 'Softaware developer', 
      company : 'Google'
    }, 
    location : {
      city : "Vantaa", 
      country : "Finland"
    }
  }).then(() => {
    console.log("Data is sasved "); 
  }).catch((e) =>{
    console.log("Something goes wrong", e); 
  });  

  database.ref('age').set(37); 
  database.ref('location/city').set('Vantaa'); 

  database.ref('attributes').set(
    {
      height : 172, 
      weight : 71
    }
  ).then(() => {
      console.log('Second set call  worked'); 
  }).catch((err) => {
      console.log('Things goes wrong', err); 
  })

  // remove data from datavase 

  //database.ref(isSingle).set(null); 

  database.ref('isSingle').
  remove().
  then(() => {
    console.log(""); 
  }).catch((err)=> {
    console.log(); 
  }); 

// Update data

  database.ref().update({
    name : 'Jenny', 
    age : 33
  }); 

  database.ref().update({
    stressLevel : 9, 
    'job/company' : 'Amazon',
    'location/city' : 'Seatle'
  }); 


/*
  const promise = new Promise ((resolve, reject) => {

    setTimeout (() => {
      //resolve("This is resolve"); 
      reject('Something goes wrong ');
    }, 2000); 
  }); 


  console.log('before'); 

  promise.then((data) => {
    console.log('2', data); 
  }, (error) => {
    console.log(error); 
  } ); 

  console.log('after'); 

  */