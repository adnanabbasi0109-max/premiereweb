export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  company: string;
  location: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Premier Bars has been our preferred TMT supplier for over 7 years. Their Fe550 bars have consistently met our structural specifications and their delivery reliability has never let us down on a critical project timeline.",
    author: "Mr. Vikram Singh",
    designation: "Procurement Head",
    company: "Rajasthan Supplies Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "The quality of Premier's TMT bars is exceptional. We used their product across multiple high-rise projects in Noida and the consistency — batch to batch — is something we haven't found with any other supplier at this price point.",
    author: "Er. Arun Mehta",
    designation: "Senior Structural Engineer",
    company: "JMC Projects India Ltd.",
    location: "Noida, Uttar Pradesh",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "From technical support to on-site delivery coordination, Premier Bars sets a new standard in customer service for the steel industry. Their GreenPro certified bars helped us achieve green building credits on our IGBC-rated project.",
    author: "Ms. Priya Rajput",
    designation: "Project Director",
    company: "NMRD Infrastructure Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    rating: 5,
  },
];
