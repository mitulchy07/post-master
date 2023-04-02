import Layout from "../Layout";
import Image from "next/image";



export default function Testimonials() {

    return (
        <>
               <Layout>

                      <div className="">
                         <h1 className="text-3xl font-bold text-center">Testimonials</h1>

                         <div className="grid grid-cols-3 gap-4 my-5">
                               <div className=" p-4 text-center rounded-lg bg-slate-100">
                                    <p>We have been working, growing together since the beginning of PostMasters journey. PostMastess parcel tracking and fast payment facility has made running my business easier than ever
                                        <br></br>
                                    <strong>Alex Ovi</strong>
                                    <span>Amazon</span>    
                                    </p>
                                </div>    
                               <div className=" p-4 text-center rounded-lg bg-slate-100">
                                    <p>We have been working, growing together since the beginning of PostMasters journey. PostMasters parcel tracking and fast payment facility has made running my business easier than ever
                                        <br></br>
                                    <strong>Alex Ovi</strong>
                                    <span>Amazon</span>    
                                    </p>
                                </div>    
                               <div className=" p-4 text-center rounded-lg bg-slate-100">
                                    <p>We have been working, growing together since the beginning of PostMasters journey. PostMasters parcel tracking and fast payment facility has made running my business easier than ever
                                        <br></br>
                                    <strong>Alex Ovi</strong>
                                    <span>Amazon</span>    
                                    </p>
                                </div>    
                         </div>
                      </div>
               </Layout>
        </>
    )
}