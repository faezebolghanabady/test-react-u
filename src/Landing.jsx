import Advertising from './Advertising';

const Landing = () =>{
    return(
        <>
        <div className=" w-full inset-y-6   flex flex-row-reverse bg-blue-800 h-31">
            <div className=" flex flex-rowo m-10">
                {/* <img src="./p/sib.jpg"></img> */}
                <p className="text-white text-lg">های دارو</p>
            </div>

            <div className="flex flex-col m-2 w-4/5">
                <p className="text-white text-2xl">تامین دارو مورد نیاز هر داروخانه</p>
                <p className=" ml-16 text-white flex"> <span className="text-yellow-600"> های دارو </span> با سامانه جامع  </p>
                <button className= "bg-red-500 rounded text-center p-2 mt-2  text-white w-52 ml-10">ثبت نام/ ورود</button>
            </div>

        </div>


    <div className='flex flex-col'  dir="rtl">
        <div clas className='flex flex-row'>
           <div className=' w-4/5 '>
            <div className=''>
                <p className=' mt-5 p-3 mr-6  text-teal-600'>داروهای مازاد</p>
                <div className='mr-16'>
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


           <div className=' mt-16 border border-gray-500 w-1/5 m-10'>
            <div>
                <p className='p-5 text-center '>دارو های جستجو شده</p>
                <div className='mr-10'>
                <p>1.استامینوفن</p>
                <p>2.سفکسیم</p>
                <p>..3</p>
                <p>..4</p>
                </div>
            </div>
           </div>

        </div>


        <div className='bg-slate-500 flex flex-col mt-12 p-3'>
            <div className='flex flex-row'>
                <div className='text-white mr-10'>
                    <p>لینک ها</p>
                    <p className='mt-2'>درباره ما</p>
                </div>

                <div className='text-white mr-96 p-3'>
                    <p>پشتیبانی</p>
                    <p className='mt-2'>تماش با ما از طریق</p>
                    <p className='mt-1'> تلفن</p>
                    <p className='mt-1'>ایمیل</p>
                </div>
            </div>
            <div></div>
        </div>

    </div>
        </>
    )

}
export default Landing;