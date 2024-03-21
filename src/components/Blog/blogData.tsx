import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Career Curious Student",
    paragraph: "Brandon’s friend",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Brandon Goh",
      image: "/images/blog/author-01.png",
      designation: "Interviewer",
    },
    tags: ["1"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Career Curious Student",
    paragraph: "Sarah’s friend",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Sarah Kennedy",
      image: "/images/blog/author-02.png",
      designation: "Interviewer",
    },
    tags: ["2"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Career Curious Student",
    paragraph: "Anushka’s sister",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Anushka Tandon",
      image: "/images/blog/author-03.png",
      designation: "Interviewer",
    },
    tags: ["3"],
    publishDate: "2025",
  },
];
export default blogData;
