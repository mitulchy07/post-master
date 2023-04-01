import Layout from "../Layout";



const FAQS = () => {
    return (
        <Layout>
            <div className="py-10">
                <h1 className="font-medium text-center text-5xl">Frequently Asked Questions</h1>
                <div className="flex justify-between mt-20">
                    <div className="w-1/2 mr-10">
                        <div tabIndex={0} className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box mb-5">
                            <div className="collapse-title text-xl font-medium ">
                                What Is Post-Master
                            </div>
                            <div className="collapse-content">
                                <p> Post-Master is a technology-driven logistics company providing services ranging from SME product delivery services across the country to personal document, parcel delivery, and industrial logistics services to large corporate companies</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box mb-5">
                            <div className="collapse-title text-xl font-medium">
                                Can I change my plan later?
                            </div>
                            <div className="collapse-content">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box ">
                            <div className="collapse-title text-xl font-medium">
                                What is your cancellation policy?
                            </div>
                            <div className="collapse-content">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2" >

                        <div tabIndex={0} className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box mb-5">
                            <div className="collapse-title text-xl font-medium">
                                Can other info be added to an invoice?
                            </div>
                            <div className="collapse-content">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box mb-5">
                            <div className="collapse-title text-xl font-medium">
                                How does billing work?
                            </div>
                            <div className="collapse-content">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box ">
                            <div className="collapse-title text-xl font-medium">
                                How do I change my account email?
                            </div>
                            <div className="collapse-content">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default FAQS;