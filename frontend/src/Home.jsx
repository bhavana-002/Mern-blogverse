const Home = () => {
    const posts = [
        {
            id: 1,
            postimage: "/images/22.jpeg",
            category: "Technology",
            image: "/images/1.jpeg",
            author: "Sarah Johnson",
            time: "2 hours ago",
            readTime: "5 min read",
            title: "Getting Started with React and Tailwind CSS",
            description:
                "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This guide covers everything from setup...",
        },
        {
            id: 2,
            postimage: "/images/11.jpeg",
            category: "Technology",
            image: "/images/2.jpeg",
            author: "Michael Chen",
            time: "5 hours ago",
            readTime: "8 min read",
            title: "The Future of Web Development",
            description:
                "Exploring the latest trends and technologies shaping the future of web development. From AI integration to new frameworks...",
        },
        {
            id: 3,
            postimage: " /images/22.jpeg",
            category: "Lifestyle",
            image: "/images/3.jpeg",
            author: "Emily Rodriguez",
            time: "1 day ago",
            readTime: "6 min read",
            title: "Mindful Living in a Digital Age",
            description:
                "In our hyper-connected world, finding balance and mindfulness is more important than ever. Discover strategies for maintaining mental clarity...",
        },
        {
            id: 4,
            postimage: "/images/33.jpeg",
            category: "Backend",
            image: "/images/4.jpeg",
            author: "David Kim",
            time: "2 days ago",
            readTime: "12 min read",
            title: "Building Scalable Node.js Applications",
            description:
                "Learn the best practices for building robust and scalable Node.js applications. This guide covers architecture patterns, performance optimization, and more...",
        },
        {
            id: 5,
            postimage: "/images/44.jpeg",
            category: "Design",
            image: "/images/5.jpeg",
            author: "Lisa Park",
            time: "3 days ago",
            readTime: "10 min read",
            title: "Design Systems: A Complete Guide",
            description:
                "Creating consistent and scalable design systems for modern applications. Learn how to build component libraries, establish design tokens, and maintain UI consistency...",
        },
        {
            id: 6,
            postimage: "/images/55.jpeg",
            category: "AI & ML",
            image: "/images/6.jpeg",
            author: "Alex Thompson",
            time: "4 days ago",
            readTime: "15 min read",
            title: "Introduction to Machine Learning",
            description:
                "A beginner-friendly introduction to machine learning concepts and applications. Explore different algorithms, understand data preprocessing, and learn key strategies...",
        },
    ];

    return (
        <div className="p-5 flex flex-col bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-4">
                Welcome to BlogVerse
            </h1>
            <p className=" text-xl mt-6 text-gray-500 text-center">Discover amazing stories, insights, and ideas from our community of <br></br>writers.<span className="hover:underline text-blue-600 cursor-pointer">Sign in </span>to create your own posts and save your favorites.</p>

            <div className="grid md:grid-cols-3 p-20 border border-black gap-6 mb-10 ">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-xl shadow-gray-300 overflow-hidden hover:shadow-lg transition"
                    >
                        <div className="relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 transform hover:scale-105 object-cover"
                            />

                            <div className="p-5 ">
                                <span className="inline-block px-3 py-1 text-sm  absolute top-7 left-6 font-semibold text-white bg-blue-600 rounded-full mb-3">
                                    {post.category}
                                </span>
                            </div>

                            <div className="flex items-start space-x-3 text-gray-500 px-5 text-sm mb-2">
                                <img
                                    src={post.postimage}
                                    alt={post.author}
                                    className="w-10 h-10 rounded-full object-cover"
                                />


                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-800">{post.author}</span>


                                    <span className="mt-1 text-gray-500 text-sm">
                                        {post.time} • {post.readTime}
                                    </span>
                                </div>
                            </div>

                            <div className="relative p-5  bg-white">
                                
                                <h2 className="font-bold text-lg text-gray-900 mb-2">
                                    {post.title}
                                </h2>

                            
                                <p className="text-gray-600 text-md mb-12">{post.description}</p>
                                <div className="border-1 mb-10 border-gray-100"></div>
                                
                                <a href="#"
                                    className="absolute right-5 bottom-5 text-blue-600 font-semibold hover:underline text-sm">
                                    Read More
                                </a>
                                <div className="relative">
                                    <p className="text-gray-600 text-sm absolute left-5 bottom-0">🕛{post.readTime}</p>
                                    </div>
                                
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
