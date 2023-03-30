import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EditProfileInfo = () => {
  const { detailsId } = useParams();
  const [detailsInfo, setDetailsInfo] = useState([]);
//   console.log(detailsInfo);

  useEffect(() => {
    const uri = `https://texium-migration-server.onrender.com/testing/${detailsId}`;

    fetch(uri)
      .then((response) => response.json())
      .then((data) => setDetailsInfo(data));
  }, [detailsId]);

  return <div>{detailsInfo.fileName}</div>;
};
