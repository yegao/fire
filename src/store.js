import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


// 初始化Firebase
let config = {
    apikey:'AIzaSyCsXiKteCMbIhsDpGK277SR8A8P3HOjC8U',
    authDomain:'amazealls-24823.firebaseapp.com',
    databaseURL:'https://amazealls-24823.firebaseio.com',
    projectId:'amazealls-24823',
    storageBucket:'amazealls-24823.appspot.com',
    messageingSenderId:'187582214062'
}

firebase.initializeApp(config);

const ballsCollection = firebase.firestore().collection('balls');
// 您可以使用 onSnapshot() 方法侦听一个文档。
// 对您提供的回调函数的初始调用将使用相应文档的当前内容立即创建一份文档快照。之后，每次内容发生更改时，另一次调用将更新该文档快照。
ballsCollection.orderBy('createdOn','desc').limit(5).onSnapshot((ballsRef)=>{
    const balls = [];
    ballsRef.forEach((doc)=>{
        const ball = doc.data();
        ball.id = doc.id;
        balls.push(ball);
    })
});

store.ballsInfeed = balls;


export const store = {
    ballsInFeed:null,
    currentUser:null,
    writeBall(message){
        return ballsCollection
    }
}