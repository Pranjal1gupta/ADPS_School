// 'use client';

// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { BookOpen, Users, Award, Globe, ArrowRight, Play, MapPin, Phone, Clock } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Home() {
//   const features = [
//     {
//       icon: BookOpen,
//       title: 'Academic Excellence',
//       description: 'Comprehensive curriculum with modern teaching methods'
//     },
//     {
//       icon: Users,
//       title: 'Experienced Faculty',
//       description: 'Dedicated teachers committed to student success'
//     },
//     {
//       icon: Award,
//       title: 'Achievements',
//       description: 'Consistent academic and extracurricular achievements'
//     },
//     {
//       icon: Globe,
//       title: 'Global Perspective',
//       description: 'Preparing students for the global community'
//     }
//   ];

//   const stats = [
//     { number: '500+', label: 'Happy Students', color: 'from-blue-500 to-blue-600' },
//     { number: '50+', label: 'Expert Teachers', color: 'from-emerald-500 to-emerald-600' },
//     { number: '15+', label: 'Years Excellence', color: 'from-purple-500 to-purple-600' },
//     { number: '95%', label: 'Success Rate', color: 'from-orange-500 to-orange-600' }
//   ];

//   return (
//     <>
//       {/* Hero Section with Video Background Effect */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 py-24 md:py-32">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
//           <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
//         </div>
        
//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center lg:text-left"
//             >
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
//                 <Play className="w-4 h-4 mr-2" />
//                 <span className="text-sm font-medium text-white">Award Winning School</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//                 Welcome to <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">ADPS</span>
//               </h1>
//               <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
//                 Where Excellence Meets{' '}
//                 <span className="text-yellow-300">Education</span>
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 shadow-xl font-semibold px-8 h-12 text-lg">
//                   Explore Programs <ArrowRight className="ml-2 h-5 w-5 inline" />
//                 </Button>
//                 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 h-12 text-lg">
//                   Schedule Visit
//                 </Button>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="bg-gradient-to-br from-white/20 to-transparent backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30">
//                 <div className="grid grid-cols-2 gap-6">
//                   {stats.slice(0, 2).map((stat, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                       className="text-center"
//                     >
//                       <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
//                         {stat.number}
//                       </div>
//                       <div className="text-blue-100 font-semibold">{stat.label}</div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats Row */}
//       <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-500 border border-white/50"
//               >
//                 <div className={`text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform`}>
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-700 font-semibold text-sm md:text-base">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
//               Why Choose <span className="text-blue-600">ADPS</span>?
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               Discover what makes us the premier choice for your child's education
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <Card className="h-full group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
//                   <div className="p-8 text-center">
//                     <div className="relative inline-block mb-6 p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl group-hover:scale-110 transition-all duration-500">
//                       <feature.icon className="h-10 w-10 text-white drop-shadow-lg" />
//                     </div>
//                     <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
//                       {feature.title}
//                     </CardTitle>
//                     <CardContent className="pt-0">
//                       <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//                     </CardContent>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section with Better Image Placeholder */}
//       <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-200/30 to-transparent"></div>
//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold mb-8 shadow-lg">
//                 <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
//                 Shaping Future Leaders
//               </div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                 Holistic Education for{' '}
//                 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//                   Tomorrow's Leaders
//                 </span>
//               </h2>
//               <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
//                 Rigorous academics meet character development in our nurturing environment
//               </p>
              
//               <div className="space-y-4 mb-10">
//                 {[
//                   'Modern teaching methodologies',
//                   'State-of-the-art facilities',
//                   'Comprehensive extracurricular programs'
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="flex items-start p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all group"
//                   >
//                     <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
//                     <span className="font-medium text-gray-800">{item}</span>
//                   </motion.div>
//                 ))}
//               </div>
              
//               <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg font-semibold px-10 h-14 shadow-xl">
//                 Learn More <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/40">
//                 <div className="relative w-full h-80 bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white/50">
//                   <div className="text-center">
//                     <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 shadow-2xl animate-pulse"></div>
//                     <h3 className="text-2xl font-bold text-gray-800 mb-2">School Gallery</h3>
//                     <p className="text-sm text-gray-600">Replace with actual school image</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
//         <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-blue-900/70 to-black/60"></div>
        
//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//           >
//             <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl mb-8 border border-white/40">
//               <Phone className="w-5 h-5 text-yellow-400" />
//               <Clock className="w-5 h-5 text-yellow-400" />
//               <span className="text-white font-semibold">Admissions Open Now</span>
//             </div>
            
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//               Ready to Join Our{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300">
//                 School Family?
//               </span>
//             </h2>
//             <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
//               Take the first step towards your child's extraordinary future
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-lg px-12 h-16 shadow-2xl">
//                 Apply Now <ArrowRight className="ml-2 h-6 w-6 inline" />
//               </Button>
//               <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/20 backdrop-blur-sm font-bold text-lg px-12 h-16 border-2">
//                 <MapPin className="mr-2 h-5 w-5 inline" />
//                 Schedule Visit
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 { animation-delay: 2s; }
//         .animation-delay-4000 { animation-delay: 4s; }
//       `}</style>
//     </>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Award, Globe, ArrowRight, Play, MapPin, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum with modern teaching methods'
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Dedicated teachers committed to student success'
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Consistent academic and extracurricular achievements'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students for the global community'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Students', color: 'from-blue-500 to-blue-600' },
    { number: '50+', label: 'Expert Teachers', color: 'from-emerald-500 to-emerald-600' },
    { number: '15+', label: 'Years Excellence', color: 'from-purple-500 to-purple-600' },
    { number: '95%', label: 'Success Rate', color: 'from-orange-500 to-orange-600' }
  ];

  const heroSlides = [
    {
      image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767023821/IMG_2855_b7ezru.jpg',
      caption: 'Vibrant Campus Life',
      subtext: 'Where learning comes alive'
    },
    {
      image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767023681/IMG_1805_p1np7y.jpg',
      caption: 'Modern Classrooms',
      subtext: 'Innovation in every lesson'
    },
    {
      image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767023728/IMG_5547_ah25ct.jpg',
      caption: 'Sports & Activities',
      subtext: 'Building champions'
    },
    {
      image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767023615/IMG-20251217-WA0005_v00eet.jpg',
      caption: 'Happy Students',
      subtext: 'Future ready minds'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // 3 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <>
      {/* Hero Section with Image Slider Background */}
      <section className="relative overflow-hidden  py-24 md:py-32">
        {/* Image Slider Background */}
        <div className="absolute inset-0 bg-gray-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${heroSlides[currentSlide].image})`
              }}
            />
          </AnimatePresence>
          
          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>



        {/* Slide Caption */}
        <motion.div
          key={`caption-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white text-lg font-semibold bg-black/50 backdrop-blur-sm px-6 py-3 rounded-xl max-w-md z-20"
        >
          <div>{heroSlides[currentSlide].caption}</div>
          <div className="text-sm opacity-90 mt-1">{heroSlides[currentSlide].subtext}</div>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Play className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium text-white">Award Winning School</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Welcome to <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">ADPS</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Where Excellence Meets{' '}
                <span className="text-yellow-300">Education</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 shadow-xl font-semibold px-8 h-12 text-lg">
                  Explore Programs <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
                <Button size="lg" className="bg-white/30 border-2 border-white text-white hover:bg-white/50 backdrop-blur-sm font-semibold px-8 h-12 text-lg transition-all">
                  Schedule Visit
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/20 to-transparent backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30">
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(0, 2).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.number}
                      </div>
                      <div className="text-blue-100 font-semibold">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Row */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-500 border border-white/50"
              >
                <div className={`text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Why Choose <span className="text-blue-600">ADPS</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover what makes us the premier choice for your child's education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                  <div className="p-8 text-center">
                    <div className="relative inline-block mb-6 p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="h-10 w-10 text-white drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Better Image Placeholder */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-200/30 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold mb-8 shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
                Shaping Future Leaders
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Holistic Education for{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Tomorrow's Leaders
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Rigorous academics meet character development in our nurturing environment
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  'Modern teaching methodologies',
                  'State-of-the-art facilities',
                  'Comprehensive extracurricular programs'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg font-semibold px-10 h-14 shadow-xl">
                Learn More <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/40">
                <div className="relative w-full h-80 bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white/50">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 shadow-2xl animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">School Gallery</h3>
                    <p className="text-sm text-gray-600">Replace with actual school image</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-blue-900/70 to-black/60"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl mb-8 border border-white/40">
              <Phone className="w-5 h-5 text-yellow-400" />
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Admissions Open Now</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Join Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300">
                School Family?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards your child's extraordinary future
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-lg px-12 h-16 shadow-2xl">
                Apply Now <ArrowRight className="ml-2 h-6 w-6 inline" />
              </Button>
              <Button size="lg" variant="outline" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-lg px-12 h-16 shadow-2xl">
                <MapPin className="mr-2 h-5 w-5 inline" />
                Schedule Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </>
  );
}
