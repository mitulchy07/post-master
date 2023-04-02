import Layout from "../Layout";

export default function Calculator() {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="lg:text-6xl text-2xl  font-bold text-center">
          Cost Calculator
        </h1>
        <div className="p-12 w-3/5 mx-auto  flex flex-col gap-4">
          <div className="md:flex gap-10 justify-between">
            <div>
              <h3 className="text-xl font-medium ">
                Product weight(Max:40 kg)
              </h3>
              <input
                type="text"
                placeholder="Enter Product weight"
                className="input input-bordered input-error w-full input-md mt-4 "
              />
            </div>
            <div>
              <h3 className="text-xl font-medium ">Cost of the Product</h3>
              <input
                type="text"
                placeholder="Enter Cost of the Product"
                className="input input-bordered input-error w-full input-md mt-4"
              />
            </div>
          </div>
          <div className="md:flex gap-10 justify-between ">
            <div>
              <h3 className="text-xl font-medium">Pickup Area</h3>
              <input
                type="text"
                placeholder="Enter Pickup Area"
                className="input input-bordered input-error w-full input-md mt-4"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium">Delivery Area</h3>
              <input
                type="text"
                placeholder="Enter the Delivery Area"
                className="input input-bordered input-error w-full input-md mt-4"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center my-4">
            <button type="submit" className="btn btn-primary rounded-2xl">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
