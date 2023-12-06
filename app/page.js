"use client";
import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import Overview from "./components/Overview";
import Welcome from "./components/Welcome";
import { ClipLoader,BounceLoader } from "react-spinners";

export default function Home(params) {
  const [dynamicData, setDynamicData] = useState({});
  const [loading, setLoading] = useState(true);
  const [bannerData, setBannerData] = useState([])
  useEffect(() => {
    getData();
    
  }, []);

  const getData = async () => {
    try {
      const firebaseData = doc(db, "Website", "Data");
      const firebaseDataBanner = doc(db, "Website", "Banner");
      const docSnapshot = await getDoc(firebaseData);

      if (docSnapshot.exists()) {
        // Access the data from the document
        const data = docSnapshot.data();
        console.log("Document data:", data);
        setDynamicData(data);
      } else {
        console.log("No such document!");
      }
      const docSnapshotBanner = await getDoc(firebaseDataBanner);

      if (docSnapshotBanner.exists()) {
        // Access the data from the document
        const data = docSnapshotBanner.data();
        console.log("Document data:", data.Images);
        setBannerData(data.Images);
      } else {
        console.log("No such document!");
      }

      // Set loading to false once data is loaded
      setLoading(false);
    } catch (e) {
      console.log("Problem", e);
      // Set loading to false in case of an error
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        // Display loader while data is being fetched
        <div className="flex flex-col py-3 items-center ">
          <BounceLoader
            color={"#000"}
            loading={loading}
            cssOverride={{
              display: "block",
              margin: "0 auto",
              borderColor: "black",
            }}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <label className=" justify-center items-center text-center  w-full text-2xl text-black font-bold">Loading</label>
        </div>
      ) : (
        // Render your components once data is loaded
        <>
          <Overview dynamicData={dynamicData} banner={bannerData}/>
          <Welcome dynamicData={dynamicData} />
        </>
      )}
    </>
  );
}
