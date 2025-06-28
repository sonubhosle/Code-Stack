import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../Styles/Blogs.css';

const blogs = [
  {
    title: 'Top 10 React.js Practices',
    image: 'https://i.postimg.cc/ZnCL7PbJ/images.jpg',
    excerpt: 'Improve your React apps with these modern tips and patterns.',
  },
  {
    title: 'Building REST APIs with Express',
    image: 'https://i.postimg.cc/ZnCL7PbJ/images.jpg',
    excerpt: 'Learn how to build scalable and secure REST APIs using Express.js.',
  },
  {
    title: 'CSS Tips for Clean UI',
    image: 'https://i.postimg.cc/ZnCL7PbJ/images.jpg',
    excerpt: 'Master modern CSS layouts with these game-changing techniques.',
  },
  {
    title: 'Why MongoDB for Modern Apps?',
    image: 'https://i.postimg.cc/ZnCL7PbJ/images.jpg',
    excerpt: 'Explore the benefits of using MongoDB in full stack applications.',
  },
  {
    title: 'Full Stack Developer Tools',
    image: 'https://i.postimg.cc/ZnCL7PbJ/images.jpg',
    excerpt: 'A curated list of tools every full stack developer should know.',
  },
  {
    title: 'Tailwind CSS in Real Projects',
    image: 'https://i.postimg.cc/ZnCL7PbJ/images.jpg',
    excerpt: 'Build responsive and fast UIs with Tailwind CSS the right way.',
  }
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-header" data-aos="fade-down">
        <h1>My <span>Blog</span> Posts</h1>
        <p>Cool reads from a passionate Full Stack MERN Developer.</p>
      </div>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
             <div className="image">
             <img src={blog.image} alt={blog.title} />
             </div>
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
