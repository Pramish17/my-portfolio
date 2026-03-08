import { motion } from "framer-motion"

import m1 from "../assets/m1.jpg"
import m2 from "../assets/m2.jpg"
import w1 from "../assets/w1.jpg"
import w2 from "../assets/w2.jpg"

const testimonials = [
  {
  name: "Shishir Rana",
  role: "Financial Planning & Analysis Analyst at Global Banking School",
  review:
    "Pramish is a highly dedicated developer who pays great attention to detail. His ability to understand requirements and translate them into practical solutions made a real difference to our project. It was a pleasure working with someone so reliable and committed.",
  image: m1,
},
{
  name: "Sandesh Rana",
  role: "Vice President at JP Morgan Chase",
  review:
    "Pramish brings a thoughtful and structured approach to development. He combines strong technical skills with a willingness to learn and improve continuously. I would gladly recommend him to any team looking for a motivated and dependable developer.",
  image: w1,
},
{
  name: "Yogya Sharma",
  role: "Founder & CEO at Oncore Software Solutions",
  review:
    "During his time working with us, Pramish consistently demonstrated strong problem-solving skills and a proactive attitude. He takes ownership of his work and strives to deliver quality results. He was a valuable member of the team.",
  image: m2,
},
{
  name: "Dr. Fateme Dinmohammadi",
  role: "Associate Professor (Reader) in Artificial Intelligence at University of West London",
  review:
    "Pramish showed strong commitment and curiosity throughout his academic and technical work. He approaches challenges with a positive mindset and demonstrates the ability to apply his software engineering knowledge effectively in practical projects.",
  image: w2,
},
];

export default function Testimonials(){
  return(
    <section id ="testimonials" className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20">
      <motion.h2 className="text-4xl font-bold mb-16"
      initial={{opacity:0, y:-50}}
      animate= {{opacity:1,y:0}}
      transition={{duration:0.6}}
      >
      What People Say
      </motion.h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
  {testimonials.map((t,i) => (
    <motion.div
      key={t.name +1}
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:i*0.2}}
      viewport={{once:true}}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500
      hover:scale-105 hover:-rotate-1">
        <img src={t.image} alt={t.name} className="w-20 rounded-full border-2 border-white/40 mb-4 object-cover"
        loading="lazy" />

<p className="text-gray-200 italic mb-4">
{t.review}
</p>
<h3 className="text-lg font-semibold">
  {t.name}
</h3>
<p className="text-sm text-gray-400">
  {t.role}
</p>

    </motion.div>
  ))}


</div>

    </section>
  )
}
