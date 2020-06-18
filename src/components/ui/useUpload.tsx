import { useState } from 'react';

// TODO: move to config
const endpoint = 'https://api.cloudinary.com/v1_1/fizbuz/upload';
const uploadPreset = 'piu2pkro';

interface CloudinaryUploadResponse {
    url: string;
}

function useUpload() {
    const [uploading, setUploading] = useState(false);
    const [data, setData] = useState(undefined);

    const upload = async ({ target }) => {
        const data = new FormData();
        data.append('upload_preset', uploadPreset);
        data.append('file', target.files[0]);
        setUploading(true);
        const res = await fetch(endpoint, {
            method: 'POST',
            body: data,
        });
        setUploading(false);
        setData(await res.json());
    };

    return { uploading, data, upload };
}

export default useUpload;
