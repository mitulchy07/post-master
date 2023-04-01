const services = [
    {
      id: 1,
      title: "Service 1",
      description: "This is the description for Service 1",
      image: "/images/image%207.png",
    },
    {
      id: 2,
      title: "Service 2",
      description: "This is the description for Service 2",
      image: "/images/image%207.png",
    },
    {
      id: 3,
      title: "Service 3",
      description: "This is the description for Service 3",
      image: "/images/image%207.png",
    },
    {
      id: 4,
      title: "Service 3",
      description: "This is the description for Service 3",
      image: "/images/image%207.png",
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(services);
  }