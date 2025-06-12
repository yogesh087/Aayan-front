import { Close } from "@mui/icons-material";
import { IconButton, Modal } from "@mui/material";

const View = ({ service, open, setOpen }) => {

    return (
        <Modal open={open} onClose={() => setOpen(false)} className='w-screen h-screen flex justify-center items-center ' >
            <div className="sm:w-[50rem] w-[90%] relative border-textGray border-[1px] rounded-[4px] " >

                <button onClick={()=>setOpen(false)} className="absolute top-[5px] right-[5px] rounded-full p-[2px] bg-black " ><Close style={{fontSize:'20px'}} className="text-white" /></button>

                <div className=" p-[1rem] bg-darkGray flex flex-col gap-[1rem] w-full " >
                    <div className={`flex flex-col `}  >
                        <h6 className={`capitalize w-full text-[16px] text-textGray `}>Service:</h6>
                        <p className={` text-[16px] text-white text-start w-full min-w-[10rem] max-w-[100%]  `} >
                            {service?.service}
                        </p>
                    </div>
                    <div className={`flex flex-col `}  >
                        <h6 className={`capitalize w-full text-[16px] text-textGray `}>Link:</h6>
                        <p className={` text-[16px] text-white text-start w-full min-w-[10rem] max-w-[100%]  `} >
                            {service?.link}
                        </p>
                    </div>
                    <div className={`flex flex-col `}  >
                        <h6 className={`capitalize w-full text-[16px] text-textGray `}>Icon:</h6>
                        <p className={` text-[16px] text-white text-start w-full min-w-[10rem] max-w-[100%]  `} >
                            {service?.icon}
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default View;