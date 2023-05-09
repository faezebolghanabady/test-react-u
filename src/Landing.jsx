import Advertising from './Advertising';

const Landing = () =>{
    return(
        <>
        <div className=" w-full inset-y-6   flex flex-row-reverse bg-blue-800 h-38">
            <div className=" flex flex-rowo m-10">
                {/* <img src="./p/sib.jpg"></img> */}
                <p className="text-white text-lg">های دارو</p>
            </div>

            <div className="flex flex-col m-5">
                <p className="text-white">تامین دارو مورد نیاز هر داروخانه</p>
                <p className=" text-white flex"> <span className="text-yellow-600"> های دارو </span> با سامانه جامع  </p>
                <button className= "bg-red-500 rounded text-center p-2 mt-2 text-white">ثبت نام/ ورود</button>
            </div>

        </div>


    <div  dir="rtl">
        <div clas className='flex flex-row'>
           <div>
            <div>
                <p className='dir=ltr mt-5 p-3 mr-6  text-teal-600'>داروهای مازاد</p>
                <div className=' mr-16'>
                <Advertising/>
                </div>
                <div className='mr-16 pt-5'>
                <Advertising/>
                </div>

            </div>
            <div>
                <p className='mt-5 p-3 mr-6 text-teal-600'>داروهای کسری</p>
                <div className=' mr-16'>
                <Advertising/>
                </div>
                <div className='mr-16 pt-5'>
                <Advertising/>
                </div>
            </div>
           </div>


           <div className=' mt-16 border border-gray-500'>
            <div>
                <p className='p-5 w-48 text-center'>دارو های جستجو شده</p>
            </div>
           </div>

        </div>


        <div>
        </div>

    </div>
        </>
    )

}
export default Landing;