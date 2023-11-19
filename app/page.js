"use client"
import Overview from "./components/Overview";
import Welcome from "./components/Welcome";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
export default function Home(params) {
  const [dynamicData, setDynamicData] = useState({});
  useEffect(() => {
    console.log("vikas");
    getData();
  }, []);
  const getData = async () => {
    try{

      const firebaseData = doc(db, "Website", "Data");
      
      const docSnapshot = await getDoc(firebaseData);
      
      if (docSnapshot.exists()) {
      // Access the data from the document
      const data = docSnapshot.data();
      console.log("Document data:", data);
      setDynamicData(data);
    } else {
      console.log("No such document!");
    }
  }
  catch(e){
    console.log("problem",e)
  }
  };
  return (
    <>
      <Overview dynamicData={dynamicData}/>
      <Welcome dynamicData={dynamicData}/>
    </>
  );
}
