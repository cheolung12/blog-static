// const [initialPosts, setInitialPosts] = useState(sortedPosts.slice(0, 7));

// const handleScroll = () => {
//   const element = document.documentElement;
//   const scrollTop = element.scrollTop || document.body.scrollTop;
//   const scrollHeight = element.scrollHeight || document.body.scrollHeight;
//   const clientHeight = element.clientHeight || window.innerHeight;
  
//   const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
//   // console.log("현재 스크롤 값:", scrollTop);
  
//   if (scrolledToBottom) {
//     setInitialPosts(sortedPosts.slice(0, initialPosts.length + 7));
//   }
// };

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);
