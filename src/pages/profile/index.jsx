import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { slug } = useParams();
  return <div>Profile page {slug}</div>;
}

export default Profile;
