import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EditProfileInfo = () => {
  const { detailsId } = useParams();
  const [detailsInfo, setDetailsInfo] = useState({});

  useEffect(() => {
    const uri = `http://localhost:5000/testing/${detailsId}`;

    fetch(uri)
      .then((response) => response.json())
      .then((data) => setDetailsInfo(data));
  }, [detailsId]);
  return <div>{detailsInfo.fileName}</div>;
};
