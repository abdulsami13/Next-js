import styles from "./Carousel.module.css"

export default function InputTextField(){
    return(

        <div className={`relative w-64 ${styles.inputBox}` }>
        <input type="text" required={true} className={`w-full p-3 border-1 border-solid border-white/25
        bg-[#f0f0f0] border-r-4 outline-none text-black text-base duration-500 `}/>
<span className="absolute left-0 p-3 pointer-events-none text-base text-black/25
text-transform: uppercase;
duration-500">First Name</span>
    </div>

)
}
{/* <div className={styles.inputBox}>
<input type="text" required={true} />
<span>First Name</span>
</div> */}