import multer from "multer"

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "/home/adminis/local/resume_with_blog/server/public/uploads");
    },
    filename: (req, file, cb) =>{
        const extention = file.originalname.split('.').pop();
        cb(null, Date.now() + '_' +file.originalname );
    }
});

const upload = multer({storage: storageConfig})

const uploadSingleFile = upload.single('selectedFile')

export { upload, uploadSingleFile }