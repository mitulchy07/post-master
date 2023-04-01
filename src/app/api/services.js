const services = [
    {
      id: 1,
      title: "Service 1",
      description: "This is the description for Service 1",
      image: "/service1.jpg",
    },
    {
      id: 2,
      title: "Service 2",
      description: "This is the description for Service 2",
      image: "/service2.jpg",
    },
    {
      id: 3,
      title: "Service 3",
      description: "This is the description for Service 3",
      image: "/service3.jpg",
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(services);
  }