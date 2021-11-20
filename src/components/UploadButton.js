import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { storage } from "src/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Input = styled("input")({
  display: "none"
});

export default function UploadButtons(props) {
  const { imageEvent } = props;
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setImage(file);
        imageEvent(file);
      } else {
        setError("Please select an image to upload");
      }
    }
  };

  const handleUpdate = () => {
    if (image) {
      // const uploadTask = ref(storage, `images/${image.name}`);

      // uploadBytes(uploadTask, image).then((snapshot) => {
      //   console.log("Uploaded a blob or file!");
      // });

      const storageRef = ref(storage, `images/${image.name}`);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progr = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress("Upload is " + progr + "% done");
        },
        (err) => {
          setError(err);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            console.log("File available at", downloadURL);
          });
        }
      );
    } else {
      setError("Error please choose an image to upload");
    }
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <input type="file" onChange={handChange} />

      {/* <Button onClick={handleUpdate} variant="contained" component="span">
        Upload
      </Button> */}
      {/* <div style={{ height: "100px" }}>
        {progress > 0 ? <progress value={progress} max="100" /> : ""}
        <p style={{ color: "red" }}>{error}</p>
      </div> */}
      {/* {url && <img src={url} alt="logo" />} */}
    </Stack>
  );
}
