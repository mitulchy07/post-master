import Layout from "../Layout"

function Services({ services }) {
    return (
      <Layout>
        <h1 className="text-2xl font-bold mb-4">Our Services</h1>
        <div className="grid grid-cols-3 gap-4">
          {services.map(service => (
            <div key={service.id} className="p-4 border rounded-md">
              <h2 className="text-lg font-medium mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
  
  export default Services
