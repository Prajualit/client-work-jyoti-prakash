export const metadata = {
  title: "Client Testimonials & Experiences | The Wellness Spot",
  description: "Discover stories, videos, and testimonials from our clients on their health and fitness transformations.",
  keywords: [
    "testimonials",
    "client transformations",
    "wellness spot reviews",
    "fitness stories",
    "health coaching reviews"
  ],
  openGraph: {
    title: "Testimonials & Experiences | The Wellness Spot",
    description: "Discover stories, videos, and testimonials from our clients on their health and fitness transformations.",
    url: "/products",
    type: "website",
    images: [
      {
        url: "/images/products-og.jpg", 
        width: 1200,
        height: 630,
        alt: "Client testimonials and experiences",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials & Experiences | The Wellness Spot",
    description: "Discover stories, videos, and testimonials from our clients on their health and fitness transformations.",
    images: ["/images/products-og.jpg"],
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsLayout({ children }) {
  return children;
}
