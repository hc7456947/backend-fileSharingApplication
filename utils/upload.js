import multer from 'multer';

const upload = multer({ dest: 'http://localhost:8000/file' })


export default upload;