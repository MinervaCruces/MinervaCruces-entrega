import {MoonLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="container mx-auto max-w-[1170px] flex justify-center items-center h-[50vh]">
            <MoonLoader
                    color="#e800ff"
                    size={80}
                    speedMultiplier={1}
            />
        </div>
    )
}