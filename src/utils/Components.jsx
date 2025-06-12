import { Camera, Clear } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import { useRef, useState } from 'react'
import { deleteImage, uploadImage } from '../redux/actions/general'
import { useDispatch, useSelector } from 'react-redux'

export const Error = ({ error }) => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center " >
            <p className="text-[20px] text-red " >{error}</p>
        </div>
    )
}


export const Loading = ({ title, color }) => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-[1rem] " >
            <CircularProgress style={{ width: '60px', height: '60px', color: color || '#ffb626' }} />
            <p className="text-[20px] text-white " >{title || 'Loading...'}</p>
        </div>
    )
}

export const Upload = ({ image }) => {
    const dispatch = useDispatch()
    const lastSlashIndex = image?.lastIndexOf('/');
    const filename = image?.substring(lastSlashIndex + 1);
    const imageRef = useRef(null)

    const { isFetching } = useSelector(state => state.general)
    const [error, setError] = useState('')

    const handleUploadImage = (e) => {
        const file = e.target.files[0]

        // Reset error
        setError('')

        if (!file) return

        const validTypes = ['image/png', 'image/jpg', 'image/jpeg']
        const maxSize = 1 * 1024 * 1024 // 1MB

        if (!validTypes.includes(file.type)) {
            setError('Only PNG, JPG, and JPEG images are allowed.')
            return
        }

        if (file.size > maxSize) {
            setError('Image size must be less than 1MB.')
            return
        }

        const formData = new FormData()
        formData.append('image', file)
        dispatch(uploadImage(formData))
    }

    const handleDelete = () => {
        dispatch(deleteImage(filename))
    }

    return (
        <>
            {isFetching ? (
                <div className="w-full flex justify-center items-center">
                    <CircularProgress />
                </div>
            ) : (
                <>
                    {image ? (
                        <div className="w-full h-full relative flex justify-center items-center">
                            <img src={image} alt="uploaded" className="rounded-[8px] w-full h-full" />
                            <button onClick={handleDelete} className="absolute top-[4px] right-[4px] rounded-full bg-white text-white w-[20px] h-[20px] flex justify-center items-center">
                                <Clear style={{ fontSize: '16px' }} />
                            </button>
                        </div>
                    ) : (
                        <div className="w-full h-full flex justify-center items-center flex-col gap-2">
                            <input ref={imageRef} type="file" accept="image/*" className="hidden" onChange={handleUploadImage} />
                            <button onClick={() => imageRef.current.click()} className="flex flex-col justify-center items-center">
                                <Camera style={{ fontSize: '36px' }} />
                                Upload Image
                            </button>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </div>
                    )}
                </>
            )}
        </>
    )
}
