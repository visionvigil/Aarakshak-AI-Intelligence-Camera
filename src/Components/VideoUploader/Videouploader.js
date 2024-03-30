import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../Firebase';


export default function VideoUploader() {

    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        if(file){
            document.getElementsByClassName(`custom-file-input`).value = file;
        }
    }

    const handleUpload = () => {
        const fileRef = ref(storage, `videodetection-aarakshak/${v4()}`);
        uploadBytes(fileRef, file).then((snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
            alert("Your Video is Uploaded Successfully");
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        if (!file) {
            setButtonDisabled(true);
            return;
        }
        setButtonDisabled(false);
    }, [file])
    

    return (
        <div className='upload-container'>
            <input className='custom-file-input' type="file" onChange={handleChange} />
            <button disabled={buttonDisabled} className='btn btn-success' onClick={handleUpload}>Upload Video</button>
            <div>{progress > 0 && `Progress: ${progress.toFixed(2)}%`}</div>
        </div>
    );
}
